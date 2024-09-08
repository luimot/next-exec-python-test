import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<number | null>(null);

  const runPythonScript = async () => {
    const a = 5;
    const b = 7;

    const response = await fetch(`/api/run-python?a=${a}&b=${b}`);
    const data = await response.json();
    
    setResult(Number(data.result));
  };

  return (
    <div>
      <h1>Resultado do Python: {result !== null ? result : 'Clique no botão'}</h1>
      <button onClick={runPythonScript}>Rodar Script Python</button>
    </div>
  );
}
