import "./certificatepage.css";
import certificateData from "../../Data/certificates.json";
import Certificate from "./Certificate/Certificate";


const CertificatePage = () => {
  return (
    <div className="certificatePage">
        <h1 className="aboutHeading">
        Certificates
        <span className="headingBorder"></span>
      </h1>
      <div className="certificateContainer">
        {
            certificateData.map((data, idx)=>{
                return <div className="certificateSection">
                    <div className="certificateTitle">
                        <div className="titleIcon">
                        <i className={data.svg}></i>
                        </div>
                        <p className="certTitle">{data.category}</p>
                    </div>
                    <div className="certificateList">
                        {
                            data.categoryList.map((item)=>{
                                return <Certificate name={item.title} detail={item.learning} image={item.certificateImg} />
                            })
                        }
                    </div>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default CertificatePage;
