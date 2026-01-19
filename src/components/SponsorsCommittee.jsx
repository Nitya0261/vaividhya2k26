function SponsorsCommittee() {
  return (
    <section className="sponsors-section">
      <div className="container">

        {/* Sponsors */}
        <div className="section-header">
          <h2>Our <span>Sponsors</span></h2>
          <p>Supported by innovation-driven organizations</p>
        </div>

        <div className="infinite-slider">
          <div className="slider-track">
            {/* Repeat logos for infinite effect */}
            <div className="sponsor-box">Sponsor 1</div>
            <div className="sponsor-box">Sponsor 2</div>
            <div className="sponsor-box">Sponsor 3</div>
            <div className="sponsor-box">Sponsor 4</div>
            <div className="sponsor-box">Sponsor 5</div>

            <div className="sponsor-box">Sponsor 1</div>
            <div className="sponsor-box">Sponsor 2</div>
            <div className="sponsor-box">Sponsor 3</div>
            <div className="sponsor-box">Sponsor 4</div>
            <div className="sponsor-box">Sponsor 5</div>
          </div>
        </div>

        {/* Committee */}
        <div className="section-header committee-header">
          <h2>Organizing <span>Committee</span></h2>
          <p>Team behind VAIVIDHYA 2K26</p>
        </div>

        <div className="infinite-slider slow">
          <div className="slider-track">
            <div className="committee-card">Dr. A – Faculty</div>
            <div className="committee-card">Student B – Lead</div>
            <div className="committee-card">Student C – Tech</div>
            <div className="committee-card">Student D – Design</div>
            <div className="committee-card">Student E – Media</div>

            <div className="committee-card">Dr. A – Faculty</div>
            <div className="committee-card">Student B – Lead</div>
            <div className="committee-card">Student C – Tech</div>
            <div className="committee-card">Student D – Design</div>
            <div className="committee-card">Student E – Media</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SponsorsCommittee;
