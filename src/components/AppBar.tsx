interface AppBarProps {
  title: string;
}

function AppBar(props: AppBarProps) {
  const { title } = props;

  return (
    <div className="AppBar">
      <section className="AppBar__title">
        <p>{title}</p>
      </section>
    </div>
  );
}

export default AppBar;
