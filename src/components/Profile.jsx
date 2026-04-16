import '../styles/Profile.css'

export default function Profile({ profile }) {
  return (
    <div className="profile">
      <img src={profile.image} alt="Billy in Florence" />
      <ul className="info">
        {profile.items.map((item, i) => <li key={i}>{item}</li>)}
        <li>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li>
          <a href={profile.github.link}><i className={profile.github.icon}></i></a>
          <a href={profile.linkedin.link}><i className={profile.linkedin.icon}></i></a>
        </li>
      </ul>
    </div>
  )
}