// pages/api/run-python.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { a, b } = req.query;

  // Caminho para o script Python
  const scriptPath = './script.py';

  // Comando para executar o script Python com os argumentos `a` e `b`
  const command = `python ${scriptPath} ${a} ${b}`;

  // Executa o comando
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`);
      res.status(500).json({ error: stderr });
      return;
    }

    // Retorna o resultado do script Python
    res.status(200).json({ result: stdout.trim() });
  });
} 
