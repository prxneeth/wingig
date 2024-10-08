import "./javaTech.css";

import javapic from './javapic.png';

export default function Java() {
  return (
    <div className="web">
      <div className="h-b">
        <div className="h">
          <h1>Java & J2EE Technologies</h1>
        </div>
        <div className="b">
          <button type="button"> Download PDF</button>
        </div>
      </div>
      <p className="javaP">
        Java is one of the Evergreen Technology having Demand for java
        developers .Using java we can deploy any web,mobile and desktop
        application.
      </p>
      <div className='courseJava'>
        <div className="requiredJava">
          <h3>Top Requirements On JAVA Domain:</h3>
          <ul>
            <li>Core Java Development</li>
            <li>J2EE Development</li>
            <li>J2ME Development</li>
            <li>Java FrameWorks (Struts/Spring/Hibernate/JSF/GWT/others)</li>
          </ul>
        </div>
        <div className='image1Java'>
          < img className="javapic1" src={javapic} alt="image" /></div>
      </div>

      <div className="optionJava">
        <div className="boxJava">
          <select className="javaSelect">
            <option>Hibernate/Ajax/Structs</option>
            <option>Hibernate</option>
            <option>Ajax</option>
            <option>Struts</option>
          </select>
        </div>
      </div>

      <table className="tableJava" >
        <tr>
          <th>Module</th>
          <th>Sub Module</th>
          <th>Experience</th>
          <th>Location</th>
          <th>Quarterly Analysis</th>
          <th>Comments</th>
          <th>Connect Our Expert</th>
        </tr>
        <tr>
          <td>Hibernate/Ajax/Struts</td>
          <td>
            <div className="boxJava1">
              <select>
                <option value="Select Option">Select Option</option>
                <option value="Option 1">option 1</option>
                <option value="Option 2">option 2</option>
                <option value="Option 3">option 3</option>
              </select>

            </div>
          </td>
          <td>No.of years</td>
          <td>Address</td>
          <td>Analysis</td>
          <td>Any Comments</td>
          <td>
            <button type="button">Connect</button>
          </td>
        </tr>
      </table>

      <h2 className="javaH2">Technology Scope,Eligibility Summary & FAQ'S</h2>

      <div className="a">
        <div className="a1">Technology Established</div>
        <div className="a2">
          Java Was Established In Early 1995 By Sun Microsystems And Later Sun
          Was Acquired By Oracle Corporation.Today's World Most Of Our Used
          Applications Are Running On Java Platform.
        </div>
      </div>
      <div className="a">
        <div className="a1">Job Market Scope India</div>
        <div className="a2">
          Having Good Demand But Skill Quality Developers Are Not Available As
          Expected.In All The IT Companies Always Have Requirement Would Be
          There Throughout The Year.
        </div>
      </div>
      <div className="a">
        <div className="a1">Salaries Range</div>
        <div className="a2">
          Quality Java Developers Are Getting High Packages.But Still Average
          Salary Is Less Due To High In Number.There Are 10 Million Plus Java
          Developers Working World Wide In That 35% Developers Are There In
          India.
        </div>
      </div>
      <div className="a">
        <div className="a1">Recruitment Locations</div>
        <div className="a2">
          All Over India Cities(Bangalore,Mumbai,Hyderabad,Chennai,Pune and
          Others.)
        </div>
      </div>
      <div className="a">
        <div className="a1">Recruitment Companies</div>
        <div className="a2">
          All The MNC'S And Start Up's Having Projects In Java Domain
        </div>
      </div>
      <div className="a">
        <div className="a1">Eligibility</div>
        <div className="a2">
          All The Qualifications Accepted(B.Tech Any Stream,MBA,BSC And
          Others)Including Fresher's.
        </div>
      </div>
      <div className="a">
        <div className="a1">Job Roles</div>
        <div className="a2">
          Most Of The Jobs Concentrating In Development.So In Java Having
          Developers,UI Designers,Consultants,Script Developers Are Desired
          Roles In This Domain.
        </div>
      </div>
      <div className="a">
        <div className="a1">Scope to Freshers</div>
        <div className="a2">
          Scope Is There For Both Fresher's And Experienced Professionals In
          Java Domain.
        </div>
      </div>
      <div className="a">
        <div className="a1">Technology Migration scope</div>
        <div className="a2">
          Observed 40% People Are Migrating From Java Development To Enterprise
          Application,Cloud,AI/ML,Data Scientist,IT Security Domain For Best
          Career Growth.
        </div>
      </div>
      <div className="a">
        <div className="a1">KT & Training In Java</div>
        <div className="a2">
          Availability Is High,For Java Development Lot Of Documents And Videos
          Available Online Not Required To Approach Institutions Much.Whereas
          For Advanced Java Framework Development Required To Take KT From
          Experienced Professionals.
        </div>
      </div>
      <div className="a">
        <div className="a1">References</div>
        <div className="a2">
          Need To Provide Few Articles Links And Gartner/Other urveys..
        </div>
      </div>
      <div className="a">
        <div className="a1">Blogs and Information Center</div>
        <div className="a2">Need to provide few links.</div>

      </div>
    </div>
  );
}
