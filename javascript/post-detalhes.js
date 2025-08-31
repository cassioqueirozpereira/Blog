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
            title: 'Conceitos Essenciais',
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