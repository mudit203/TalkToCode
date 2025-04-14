import express, { Request, Response } from 'express';
import cors from 'cors';
import { readFile, writeFile, access } from 'fs/promises';
import { constants } from 'fs';
import path, { dirname } from 'path';
import { readdir } from 'fs/promises'; // Updated import for readdir

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Helper function to check if file exists
async function fileExists(filePath: string): Promise<boolean> {
    try {
        await access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

// Endpoint to fetch file contents
app.get('/api/file', async (req: Request, res: Response):Promise<void> => {
    try {
        const filePath = req.query.path as string;

        if (!filePath) {
            res.status(400).json({
                error: 'File path is required',
                details: 'Please provide a valid file path'
            });
            return;
        }

        const exists = await fileExists(filePath);

        if (!exists) {
            try {
                const parentDir = dirname(filePath);
                const dirExists = await fileExists(parentDir);
                if (dirExists) {
                    const files = await readdir(parentDir);
                    console.log('Files in parent directory:', files);
                }
            } catch (err) {
                console.log('Could not read parent directory:', err);
            }

             res.status(404).json({
                error: 'File not found',
                details: `The file at path "${filePath}" does not exist`
            });
            return;
        }

        const content = await readFile(filePath, 'utf-8');
        res.json({ content });
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).json({
            error: 'Failed to read file',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
        return;
    }
});

// Endpoint to modify file contents
app.post('/api/file', async (req: Request, res: Response):Promise<void>  => {
    try {
        const { filePath, content } = req.body;

        if (!filePath || content === undefined) {
             res.status(400).json({
                error: 'Invalid request',
                details: 'Both file path and content are required'
            });
            return;
        }

        const exists = await fileExists(filePath);
        if (!exists) {
             res.status(404).json({
                error: 'File not found',
                details: `The file at path "${filePath}" does not exist`
            });
            return;
        }

        await writeFile(filePath, content, 'utf-8');
        res.json({
            success: true,
            message: 'File updated successfully'
        });
        return;
    } catch (error) {
        console.error('Error writing file:', error);
        res.status(500).json({
            error: 'Failed to write file',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
        return;
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
