import "../components/testimonial.css"

const testimonialsData = [
  {
    name: "Sawariya Pizza",
    role: "Food Brand",
    img: "/sawariya.jpeg",
    desc: "Graphic & reel client. We designed eye-catching posters, banners, and creative visuals to boost their brand presence."
  },
  {
    name: "Prem Vatika",
    role: "Event & Wedding Venue",
    img: "/premvatika.jpeg",
    desc: "We developed a complete website with smooth payment integration for bookings and customer convenience."
  },
  {
    name: "Cafe 75",
    role: "Cafe & Restaurant",
    img: "sistic.png",
    desc: "Designed posters, menu creatives, and banners to enhance their café branding and customer appeal."
  },
  {
    name: "Ingelnt",
    role: "Business Website",
    img: "/ingelt.jpeg",
    desc: "We designed and developed a professional website focused on clean UI, performance, and brand identity."
  },
  {
    name: "Walbi",
    role: "AI Crypto Trading Platform",
    img: "/walbi.png",
    desc: "Walbi.com is an AI-powered crypto trading platform with smart bots, automated tools, and advanced market analysis."
  },
  {
    name: "Aashirwad Bakery",
    role: "Bakery & Food Brand",
    img: "/aashirwad.jpeg",
    desc: "We created a fully animated, creative website that reflects the brand’s warmth and uniqueness."
  },
  {
    name: "Zipeey",
    role: "Digital Brand",
    img: "/zipeey.jpeg",
    desc: "We managed complete social media content including reels, carousels, and creative brand campaigns."
  }
];


const Testimonials = () => {
  return (

    <div className="testimonials-page">

      {/* Header */}
      <h1 className="page-title">Testimonials</h1>
      <p className="breadcrumb">Home / <span>Testimonials</span></p>

      {/* Skills Bar */}
      <div className="skills-bar">
        <span>Web Design</span>
        <span>*</span>
        <span>App Design</span>
        <span>*</span>
        <span>Dashboard</span>
        <span>*</span>
        <span>Wireframe</span>
      </div>

      {/* Section Title */}
      <h2 className="section-title">
        Testimonials that <span>Speaks to My Results</span>
      </h2>

      {/* Cards */}
      <div className="cards">
        {testimonialsData.map((item, index) => (
          <div className="card" key={index}>
            <div className="profile">
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              
              </div>
            </div>
            <p className="desc">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>
          Let's Create an <span>Amazing</span> Project Together!
        </h2>
        <button>Contact Us</button>
      </div>

    </div>
  );
};




export default Testimonials;