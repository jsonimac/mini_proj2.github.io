import questions from "./faq.json";
import Banner from "./Banner";

export default function Faqs() {
    return (
        <Banner>
      <Banner.Header>Frequently Asked Questions</Banner.Header>
      {questions.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answers}</Banner.Text>
        </Banner.Entity>
      ))}
      <h4>
        Question not on the list? Contact us for further enquiries
      </h4>
    </Banner>
        
    );
}