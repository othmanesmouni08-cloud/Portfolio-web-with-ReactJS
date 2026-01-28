export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="card">
        <h3 className="content__title">Skills</h3>
        <ul className="content__list">
          <li className="content__item"><i className="fab fa-js" style={{color:"#f7df1e"}}></i> JavaScript</li>
          <li className="content__item"><i className="fab fa-node" style={{color:"#3c873a"}}></i> Node.js</li>
          <li className="content__item"><i className="fab fa-js-square" style={{color:"#007acc"}}></i> TypeScript</li>
          <li className="content__item"><i className="fas fa-network-wired" style={{color:"#00b4d8"}}></i> HTTP</li>
          <li className="content__item"><i className="fab fa-css3-alt" style={{color:"#264de4"}}></i> CSS</li>
          <li className="content__item"><i className="fas fa-database" style={{color:"#4db33d"}}></i> MongoDB</li>
          <li className="content__item"><i className="fas fa-server" style={{color:"#6c757d"}}></i> Express.js</li>
          <li className="content__item"><i className="fas fa-server" style={{color:"#6c757d"}}></i> React.js</li>
        </ul>
      </div>
    </section>
  );
}
