const App = () => {
  // useMeno useCallback 不会执行第一个参数函数，而是将它返回给你，而 useMemo 会执行第一个函数并
  //  且将函数执行结果返回给你。
  // useMeno 类似 vue 的计算属性
  return (
    <div>
      App
      <span>aaa</span>
    </div>
  );
};

export default App;
