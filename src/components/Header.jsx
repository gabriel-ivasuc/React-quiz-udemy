import logoImg from '../assets/quiz-logo.png';

  export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="QuizLogo"/>
      <h1>React Quizz</h1>
    </header>
  )
}
