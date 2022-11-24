import { CourseProps} from "../../types/types"
import { LikeCountInfo } from "../../types/types"
import LikeCountAPI from "../../pages/api/likeCountAPI/likeAPI"
import { useState, useEffect } from "react"
import likeImg from "../../assets/images/like.png"
import dislikeImg from "../../assets/images/dislike.png"

const AddCourse: React.FC<CourseProps> = ({
  description,
  cost,
  id,
  title,
}) => {
  
    const [like, setLike ] = useState<LikeCountInfo>({
      like:0,
      dislike: 0,
    })


      LikeCountAPI(id)
      .then((res) => {
      setLike(res.result)
      })
  
    
  return(
      <div className="card" style={{width: "18rem"}}>
      <div 
      style={{backgroundColor:"#2c3e50", height:"100px", width:"100%", display:"flex", flexDirection: "row", justifyContent:"center", alignItems: "center"}}>
       <h1 style={{color:"white"}}>{title.slice(0, 2)}</h1> 
        </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text text-muted">${cost}</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start">
            <span>{like.like}</span>
            <img src={likeImg.src} height="25px" width="25px"/>
          </div>
          <div className="d-flex justify-content-start">
            <span>{like.dislike}</span>
            <img src={dislikeImg.src}height="25px" width="25px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCourse