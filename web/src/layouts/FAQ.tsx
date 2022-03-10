import Container from "../components/Container";
import Header from "../components/Header";

function FAQ() {
  return (
    <>
      <Header />
      <div className="divider"></div>
      <footer>
        <Container>
          <ul>
            <li>
              <h4 className="text-3xl">IWD Nigeria 2022</h4>
            </li>
          </ul>

          <ul className="flex w-full flex-wrap gap-4">
            <li>
              <a href="#">IWD Nigeria 2021</a>
            </li>
            <li>
              <a href="#">About GDG Program</a>
            </li>
            <li>
              <a href="#">About WTM Program</a>
            </li>
            <li>
              <a href="#">About GDG Program</a>
            </li>
            <li>
              <a href="#">Google Dev Library</a>
            </li>

            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Code of conduct</a>
            </li>

            <li>
              <a href="#">Community </a>
            </li>

            <li>
              <a href="#">Guidelines</a>
            </li>
          </ul>
        </Container>
      </footer>
    </>
  );
}

export default FAQ;
