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
              church family. His ministry is marked by biblical conviction, pastoral humility, prayerful leadership, and a
              genuine desire to see people know Christ and grow in Him.
            </p>
            <p>
              Pastor Chommog <strong>previously served as pastor of Pines City Baptist Church</strong> in Baguio. During his
              pastoral ministry there, he was committed to biblical preaching, discipleship, prayer, and the spiritual
              strengthening of believers. His service at Pines also reflected a heart for missions and the advancement of
              the Gospel beyond the local church.
            </p>
            <p>
              His commitment to missions continued through his work as a missionary of <strong>Grace Baptist Church
              Baguio</strong>, where he was sent to <strong>Dumpsite, Irisan, Baguio City</strong>, to begin mission work and reach the
              community with the Gospel. By God’s grace, this work has developed into what is now known as Grace Baptist
              Church Irisan Mission.
            </p>
            <p>
              Through preaching, evangelism, discipleship, and pastoral care, Pastor Chommog seeks to faithfully serve
              Christ and help make the Gospel known in the community.
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
