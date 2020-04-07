# ReactHooks

> Hooks são uma nova adição ao React 16.7. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

### Hooks

#### _UseState_

O hook mais comum utilizado para controlarmos alguma variável de estado dentro de um functional component no React. Para utilizar definimos:

```
  const [count, setCount] = useState(0);
```

O primeiro valor `count` representa o valor do estado que será manipulado pela função `setCount` recebida através da desestruturação realizada no `useState`. O valor `0` repassado ao hook é o valor inicial do estado.

Então, para manipularmos o valor de `count` podemos simplesmente executar:

```
<button onClick={() => setCount(count + 1)}>+</button>
```

#### _UseEffect_

Uma das grandes deficiência dos funcional components sempre foi lidar com _side-effects_ como chamadas à API, tarefas assíncronas, modificações na DOM, etc. Com o hook `useEffect` podemos operar efeitos colaterais durante a renderização do nosso componente.

Imagine que no exemplo acima do `count` gostaríamos de atualizar o título de página toda vez que a informação de count atualizar. Dentro do nosso funcional component (antes do `return`) definimos:

```
  useEffect(() => {
    document.title = `Você clicou ${count} vezes.`
  }, [count])
```

Veja que o hook recebe como primeiro parâmetro uma função (assíncrona ou não) que é executada após inicialização e atualização do componente, mais ou menos o que temos com o `componentDidMount` e `componentDidUpdate` no stateful component.

O segundo parâmetro `[count]` indica em quais situações esse _effect_ deve executar, nesse caso ele só executará caso o valor de `count` alterar. Podemos também não repassar esse parâmetro e indicaremos ao hook que deve executar na inicialização e em todas atualizações do componente, independente de seus valores alterarem.

Outra dica é que você pode passar um array vazio `[]` ao hook como segundo parâmetro garantindo que o mesmo irá executar apenas **uma vez** na inicialização do componente (tipo um `componentDidMount`):

```
  const Repositories = () => {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const response = await axios.get('https://api.github.com/orgs/rocketseat/repos');

      setRepositories(response.data);
    }

    loadRepositories();
  }, []);

  return (...);
};
```

Veja que criamos uma nova função `loadRepositories` dentro do `useEffect`, isso se deve basicamente porque não é uma boa prática adicionarmos um `async` à função que o `useEffect` recebe como parâmetro.

### _useMemo_

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

```

Retorna um valor memorizado.

Recebe uma função `create` e um array como argumentos. O `useMemo` só recuperará o valor memorizado quando o array receber uma atualização. Esta otimização ajuda a evitar cálculos caros em cada renderização.

Lembre-se de que a função passada para `useMemo` será executa durante a renderização. Não faça nada lá que você normalmente não faria ao renderizar. Por exemplo, os `side effects` pertencem a `useEffect`, não à `useMemo`.

Se nenhum array for fornecida, um novo valor será calculado em cada renderização.

### _useCallback_

```
const memorizedCallback = useCallback(
	() => {
		doSomething(a, b);
	},
	[a, b],
);

```

Retorna um callback memorizado.

Recebe como argumentos, um callback e um array. useCallback retornará uma versão memoizada do callback que só muda se uma das entradas tiverem sido alteradas. Isto é útil quando utilizamos callbacks a fim de otimizar componentes filhos, que dependem da igualdade de referência para evitar renderizações desnecessárias (como por exemplo shouldComponentUpdate).

useCallback(fn, inputs) é equivalente a useMemo(() => fn, inputs)
