document.addEventListener('DOMContentLoaded', () => {
    // Objeto que armazena os dados dos posts.
    // Você pode adicionar mais posts aqui.
    const posts = {
        '1': {
            title: 'Fundamentos da Programação com Python',
            date: '15 de Setembro de 2025',
            body: `
                <p>Neste post, vamos explorar os conceitos básicos de programação usando Python, uma linguagem versátil e amigável para iniciantes.</p>
                <h3>Variáveis e Tipos de Dados</h3>
                <p>Em Python, as variáveis são usadas para armazenar informações. Não é preciso declarar o tipo da variável explicitamente.</p>
                <pre><code>nome = "Alice"  # String
                idade = 30      # Inteiro
                altura = 1.75   # Float
                esta_estudando = True # Booleano</code></pre>
                <h3>Estruturas Condicionais (if/else)</h3>
                <p>Para tomar decisões no código, usamos estruturas condicionais. Elas permitem que diferentes blocos de código sejam executados com base em uma condição.</p>
                <pre><code>
                if idade >= 18:
                    print("É maior de idade")
                else:
                    print("É menor de idade")</code></pre>
                <h3>Loops (for e while)</h3>
                <p>Loops são usados para repetir um bloco de código várias vezes.</p>
                <pre>                     <code># Loop for para iterar sobre uma lista
                frutas = ["maçã", "banana", "cereja"]
                for fruta in frutas:
                    print(fruta)</code></pre>
                <h3>Funções</h3>
                <p>Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas ajudam a organizar o código e torná-lo mais modular.</p>
                <pre>               <code>def saudar(nome):
                return f"Olá, {nome}!"</code></pre>
                <p>Sua sintaxe clara e a vasta comunidade tornam o aprendizado de Python muito gratificante.</p>
                `
        },
        '2': {
            title: 'Conceitos Essenciais em POO',
            date: '31 de Agosto de 2025',
            body: `
                <h3>Atributos</h3>
                <p>Atributos são as características ou propriedades de uma classe. No exemplo do bolo, os atributos poderiam ser os ingredientes, sabor, tamanho e cor.</p>
                <h3>Métodos</h3>
                <p>Métodos são as ações que um objeto pode realizar. No caso do bolo, métodos poderiam incluir pegarIngredientes(), assar(), decorar() e servir(). Get é para obter (consultar) a cor de bolo e o set permite escolher ou auterar a cor do bolo.</p>
                <h3>Classe</h3>
                <p>Pense na "receita de um bolo". Ela define os ingredientes (atributos) e as instruções para fazer um bolo (métodos), mas não é o bolo em si.</p>
                <h3>Objeto</h3>
                <p>O "bolo de chocolate pronto" é o objeto. Ele é a instância real da receita (classe), com um sabor e tamanho específicos, e pode ser consumido ou manipulado.</p>
            `
        },
        '3': {
            title: 'Encapsulamento em POO',
            date: '31 de Agosto de 2025',
            body: `
                <h3>O que é Encapsulamento?</h3>
                <p>Encapsulamento é o "empacotamento" dos atributos e métodos dentro de uma classe, assim podendo controlar o acesso aos dados para garantir segurança e proteção.</p>
                <h3>Modificadores de Acesso</h3>
                <p>Em muitas linguagens de programação, usamos modificadores de acesso para definir a visibilidade dos atributos e métodos, como público, protegido e privado:</p>
                <ul>
                    <li><strong>Público:</strong> Atributos e métodos acessíveis de qualquer lugar.</li>
                    <li><strong>Protegido:</strong> Atributos e métodos acessíveis apenas dentro da classe e suas subclasses.</li>
                    <li><strong>Privado:</strong> Atributos e métodos acessíveis apenas dentro da própria classe.</li>
                </ul>
                <h3>Benefícios do Encapsulamento</h3>
                <p>O encapsulamento oferece vários benefícios, como:</p>
                <ul>
                    <li><strong>Segurança:</strong> Protege os dados sensíveis de acessos não autorizados.</li>
                    <li><strong>Manutenção:</strong> Facilita a manutenção do código, pois mudanças internas não afetam o código externo.</li>
                    <li><strong>Clareza:</strong> Melhora a clareza do código, definindo claramente o que pode ser acessado e modificado.</li>
                </ul>
            `
        },
        '4': {
            title: 'Herança em POO',
            date: '31 de Agosto de 2025',
            body: `
                <h3>Herança</h3>
                <p>O nome já é bem sujestivo, chamamos de herança, quando uma classe (filha) herda atributos ou métodos da classe (pai).</p>
                <h3>Tipos de Herança</h3>
                <ul>
                    <li><strong>Herança Simples:</strong> Uma classe herda de uma única classe pai.</li>
                    <li><strong>Herança Múltipla:</strong> Uma classe herda de várias classes pai (não suportada diretamente em Java, mas possível através de interfaces).</li>
                    <li><strong>Herança Multinível:</strong> Uma classe herda de uma classe que já é filha de outra classe.</li>
                </ul>
                <h3>Benefícios da Herança</h3>
                <p>A herança promove a reutilização de código, facilita a manutenção e cria uma hierarquia clara entre classes.</p>
            `
        },
        '5': {
            title: 'Polimorfismo em POO',
            date: '31 de Agosto de 2025',
            body: `
                <h3>Polimorfismo</h3>
                <p>O nome "Polimorfismo" vem do grego e significa "muitas formas". Assim, fica facil de lembrar que o objeto polimorfo pode se comportar de diferentes formas.</p>
                <h3>Prós</h3>
                <p>O polimorfismo traz flexibilidade e quando usada corretamente, pode melhorar significativamente a qualidade do código, permitindo que novas funcionalidades sejam adicionadas com facilidade. No entanto, pode aumentar a complexidade do código</p>
                <h3>Contras</h3>
                <p>O polimorfismo pode tornar o código mais difícil de entender, especialmente para desenvolvedores menos experientes. Além disso, o uso excessivo de polimorfismo pode levar a um design de software complicado e difícil de manter.</p>
            `
        },
        '6': {
            title: 'Abstração em POO',
            date: '31 de Agosto de 2025',
            body: `
                <h3>Abstração</h3>
                <p>É uma classe que força as classses filhas a implementarem todos os seus métodos abstratos, ou seja, define um contrato que as classes filhas devem seguir. Uma classe abstrata pode conter métodos abstratos (sem lógica), obrigatórios e também métodos comuns (com lógica já implementada), opcionais.</p>
                <h3>Abstração e o Polimorfismo</h3>
                <p>A classe abstrata praticamente promove o polimorfismo, uma vez que todas as classes filhas terão os mesmos métodos, mas com lógicas diferentes.</p>
                <h3>Benefícios da Abstração</h3>
                <p>A abstração cria uma estrutra que padroniza o desenvolvimento das classes filhas, criando uma ordem. Melhora a organização, reutilização e manutenção</p>
            `
        },
        '7': {
            title: 'Operadores lógicos',
            date: '31 de Agosto de 2025',
            body: `
                <h3>Operadores Lógicos</h3>
                <p>Operadores lógicos são usados para combinar expressões booleanas. Eles retornam um valor booleano (True ou False) com base na combinação das expressões.</p>
                <ul>
                    <li><strong>and</strong> : Retorna True se ambas as expressões forem verdadeiras.</li>
                    <li><strong>or</strong> : Retorna True se pelo menos uma das expressões for verdadeira.</li>
                    <li><strong>not</strong> : Inverte o valor booleano da expressão.</li>
                </ul>
            `
        },
        '8': {
            title: 'Operadores de Comparação',
            date: '31 de Agosto de 2025',
            body: `
                <h3>Operadores de Comparação</h3>
                <p>Operadores de comparação são usados para comparar dois valores. Eles retornam um valor booleano (True ou False) com base na comparação.</p>
                <ul>
                    <li><strong>==</strong> : Igual a</li>
                    <li><strong>!=</strong> : Diferente de</li>
                    <li><strong>&gt;</strong> : Maior que</li>
                    <li><strong>&lt;</strong> : Menor que</li>
                    <li><strong>&gt;=</strong> : Maior ou igual a</li>
                    <li><strong>&lt;=</strong> : Menor ou igual a</li>
                </ul>
            `
        },
        '9': {
            title: 'Condicionais',
            date: '31 de Agosto de 2025',
            body: `
                <h3>Estruturas Condicionais</h3>
                <p>Para tomar decisões no código, usamos estruturas condicionais. Elas permitem que diferentes blocos de código sejam executados com base em uma condição.</p>
                <h3>if, elif e else</h3>
                <p>Usamos as palavras-chave if, elif (else if) e else para criar estruturas condicionais.</p>
                <pre><code>int idade = 20;

if (idade < 18) {
    System.out.println("Menor de idade");
} else if (idade == 18) {
    System.out.println("Tem exatamente 18 anos");
} else {
    System.out.println("Maior de idade");
}</code></pre>
                <h3>Switch Case</h3>
                <p>Permite selecionar uma entre múltiplas opções com base no valor de uma variável.</p>
                <pre><code>int numero = 2; // O valor que você quer testar

switch (numero) {
    case 1:
        System.out.println("número igual a 1");
        break;
    case 2:
        System.out.println("número igual a 2");
        break;
    default:
        System.out.println("número diferente de 1 e 2");
}</code></pre>
                <h3>Operadores Ternários</h3>
                <p>Uma forma simples de escrever uma expressão condicional.</p>
                <pre><code>int idade = 20;
String status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
System.out.println(status);</code></pre>
            `
        },
        '10': {
            title: 'Estruturas de Repetição',
            date: '31 de Agosto de 2025',
            body: `
                <h3>Estruturas de Repetição</h3>
                <p>Estruturas de repetição são usadas para executar um bloco de código várias vezes, até que uma condição seja satisfeita.</p>
                <h3>for</h3>
                <p>Usado quando o número de iterações é conhecido.</p>
                <pre><code>for (int i = 0; i > 5; i++) {
    System.out.println("Número: " + i);
}</code></pre>
                <h3>while</h3>
                <p>Usado quando o número de iterações não é conhecido e depende de uma condição.</p>
                <pre><code>int i = 0;
while (i < 5) {
    System.out.println("Número: " + i);
    i++;
}</code></pre>
                <h3>do...while</h3>
                <p>Semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez.</p>
                <pre><code>int i = 0;
do {
    System.out.println("Número: " + i);
    i++;
} while (i < 5);</code></pre>
            `
        },
        '11': {
            title: 'Arrays e Listas',
            date: '31 de Agosto de 2025',
            body: `
                <h3>Arrays</h3>
                <p>Arrays são coleções de elementos do mesmo tipo, com tamanho fixo.</p>
                <pre><code>int[] numeros = {1, 2, 3, 4, 5};
System.out.println(numeros[0]); // Acessa o primeiro elemento</code></pre>
                <h3>Listas</h3>
                <p>Listas são coleções dinâmicas que podem crescer ou diminuir de tamanho.</p>
                <pre><code>import java.util.ArrayList;

ArrayList<String> frutas = new ArrayList<>();

frutas.add("Maçã");
frutas.add("Banana");

for (String fruta : frutas) {
    System.out.println(fruta);
}</code></pre>
            `
        },
        '12': {
            title: 'Funções',
            date: '31 de Agosto de 2025',
            body: `
                <p>São blocos de código reutilizáveis que realizam uma tarefa específica.</p>
                <pre><code>public class Calculadora {

    // 'somar' é um método estático, pois pertence à classe 'Calculadora'
    public static int somar(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int resultado = somar(5, 3);
        System.out.println(resultado); // Imprime 8
    }
}</code></pre>
                <h3>Parâmetros e Retorno</h3>
                <p>Funções e métodos podem receber parâmetros (entradas) e retornar valores (saídas).</p>
                <h3>Diferença de Funções e Métodos</h3>
                <p>São basicamente iguais. Mas, as funções em java são os métodos estáticos, enquanto métodos de instância são associados a objetos.</p>
            `
        }
    };

    // Pega o parâmetro 'post' da URL (por exemplo, '?post=1')
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');

    // Seleciona os elementos HTML onde o conteúdo será inserido
    const titleElement = document.getElementById('post-title');
    const dateElement = document.getElementById('post-date');
    const bodyElement = document.getElementById('post-body');

    // Verifica se o ID do post existe no nosso objeto de dados
    if (postId && posts[postId]) {
        const post = posts[postId];
        titleElement.innerText = post.title;
        dateElement.innerText = `Publicado em ${post.date}`;
        bodyElement.innerHTML = post.body;
        document.getElementById('page-title').innerText = `${post.title} - Nome do seu Blog`;
    } else {
        // Se o post não for encontrado, exibe uma mensagem de erro
        titleElement.innerText = 'Post não encontrado';
        dateElement.innerText = '';
        bodyElement.innerHTML = '<p>O conteúdo que você procura não pôde ser carregado.</p>';
    }
});