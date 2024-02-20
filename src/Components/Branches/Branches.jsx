// import style scss
import style from "./Branches.module.scss"
import PhoneIcon from "../../assets/icons/PhoneIcon"
import LocationIcon from "../../assets/icons/LocationIcon"


export default function Branches({data,funk,ac}) {

  return (
	<div onClick={()=>funk()}
	 className={`${style.BranchesWrapper} ${ac ? style.active: ""}`}>
	     <hr className={style.branchesLine} />
		 <div className={style.Branch}>
	         <h5 className={style.branchesTitle}>{data.title}</h5>   
				<div className={style.branchesLocationAdress}>
					{/* <img src={LocationIcon} alt="burda location iconu var" /> */}
					<LocationIcon/>
			    	<h6 className={style.Adress}>{data.address}</h6>
				</div>
				
				<div className={style.Phones}>
					<PhoneIcon className={style.PhoneIcon}/>
				{/* <img className={style.PhoneIcon} src={PhoneIcon} alt="burada phone iconu var" /> */}
					 {data.phones.split("/").map((num,i)=>(
						<div className={style.phonesWrapper} key={i}>
						<a href={`tel:${num}`} className={style.phones}>{num}
						</a>
						<span className={style.line}>/</span>
						</div>
					))}
				</div>
			</div>
	</div>
  )
}
