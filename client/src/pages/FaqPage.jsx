const faqs = [
  {
    question: 'What time are your worship services?',
    answer:
      'Sunday Worship begins at 9:30 AM, and Sunday School begins at 8:30 AM. Prayer Meeting is held every Saturday at 3:30 PM.',
  },
  {
    question: 'Where are you located?',
    answer:
      'We are located in Irisan, Baguio City, and we welcome everyone to worship with us in Christ and fellowship in the gospel.',
  },
  {
    question: 'Are visitors welcome?',
    answer:
      'Yes. We warmly welcome visitors, new believers, and families who want to learn more about Jesus Christ and grow in faith.',
  },
  {
    question: 'What should I expect during a worship service?',
    answer:
      'You can expect prayer, biblical preaching, worship, and a warm and welcoming church family centered on the gospel of Jesus Christ.',
  },
  {
    question: 'How can I contact the church?',
    answer:
      'You may contact us through the church office, social media, or the contact details listed in our footer and community pages.',
  },
]

function FaqPage() {
  return (
    <section className="page-section">
      <div className="section-heading centered">
        <p className="eyebrow">FAQ</p>
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="faq-list">
        {faqs.map((item) => (
          <article key={item.question} className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FaqPage
