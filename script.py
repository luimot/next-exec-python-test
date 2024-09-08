# script.py

import sys

def main():
    # Captura argumentos passados pelo Node.js
    a = int(sys.argv[1])
    b = int(sys.argv[2])
    
    # Executa a soma
    result = a + b
    
    # Imprime o resultado (que será capturado pelo Node.js)
    print(result)

if __name__ == '__main__':
    main()
