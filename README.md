# ReactHooks

> Hooks são uma nova adição ao React 16.7. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

### Hooks

#### _UseState_

O hook mais comum utilizado para controlarmos alguma variável de estado dentro de um functional component no React. Para utilizar definimos:

    const  [count, setCount]  =  useState(0);

O primeiro valor `count` representa o valor do estado que será manipulado pela função `setCount` recebida através da desestruturação realizada no `useState`. O valor `0` repassado ao hook é o valor inicial do estado.

Então, para manipularmos o valor de `count` podemos simplesmente executar:

    <button onClick={()  =>  setCount(count +  1)}>+</button>
