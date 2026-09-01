import pastorImage from '../assets/pastor.jpg'

function PastorPage() {
  return (
    <section className="page-section">
      <div className="section-heading centered">
        <h1>Meet our pastor</h1>
        <blockquote className="pastor-verse">
          “And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; for the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ.” — Ephesians 4:11-12
        </blockquote>
      </div>

      <div className="pastor-profile">
        <div className="pastor-profile__info">
          <div className="pastor-profile__intro">
            <p className="eyebrow">Background</p>
            <h2>Serving with conviction and compassion</h2>
            <p>
              Pastor Alexander Chommog is devoted to the faithful preaching of God’s Word and the spiritual care of the
              church family. His ministry is marked by biblical conviction, pastoral humility, and a heart for people to
              know Christ and grow in Him.
            </p>
            <p>
              He teaches with clarity, leads with prayer, and encourages believers to live faithfully in every area of
              life. Through discipleship, pastoral care, and gospel-centered leadership, he seeks to strengthen the church
              and advance the mission of Christ.
            </p>
          </div>
        </div>

        <div className="pastor-profile__photo pastor-card">
          <img
            className="pastor-photo"
            src={pastorImage}
            alt="Pastor Alexander Chommog"
          />
        </div>
      </div>
    </section>
  )
}

export default PastorPage
