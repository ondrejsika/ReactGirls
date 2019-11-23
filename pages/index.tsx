import Hello from "../components/Hello";

export default () => {
  return (
    <div>
      <Hello name="Zuz" />
      <p>
        Anarcho-capitalism is a political philosophy and economic theory that
        advocates the elimination of centralized state domination in favor of
        self-ownership, private property and free markets.
      </p>
      <Hello />
    </div>
  );
};
