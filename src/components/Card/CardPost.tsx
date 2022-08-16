import React from 'react'

import { Header } from '../Header/Header';



import "../../scss/layout.scss"
import "./CardPost.scss"



import { BiHeart } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";


type Implements = {
  title: string;
  description: string;
  created: string;
  likeCount: number;
  commentCount: number;
  sharedCount: number;
  realisationUri: any[];
}

/*type User = {
  title: string;
  name: string;
  adresse: string;
  telephone: string;
  imageUri: any;
  coords: {
    latitude: number;
    longitude: number;
  };
  id: number;
  avatarUri: any;
  note: number;
  contrat: number;
  aime: number;
  realisation: number;
  commentaire: number;
  implementation: {}[]

}*/

export const CardPost = ({ dataset, skill, name, avatar }: { dataset: Implements, skill: string, name: string, avatar: string }) => {

  const date = new Date().toLocaleDateString();;

  return (
    <div className=' cardPost content-1 '>
      <Header srcImg={avatar} title={dataset.title} subtitle={skill} description={name} />
      <div className="cardPostHeaderDesc" style={{ marginTop: 24 }}>
        {date.toString()}
      </div>


      <div className="cardPostBody">
        <p className="text textParagraph">

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum eveniet itaque voluptate unde doloribus distinctio, perspiciatis deserunt qui aliquid molestias, iusto a non, similique consequuntur dicta odio natus nisi!
        </p>
        <div className="cardPostBodyImage"><img alt='card' src={dataset.realisationUri[0]} /></div>
      </div>

      <div className="cardPostDash">
        <div className='cardPostDashItem'>
          <BiHeart />
          <div className="cardPostDashItemTitle">Likes</div>
        </div>
        <div className='cardPostDashItem'>
          <BiComment />
          <div className="cardPostDashItemTitle">Comment</div>
        </div>
        <div className='cardPostDashItem'>
          <BiShareAlt />
          <div className="cardPostDashItemTitle">Shared</div>
        </div >
      </div >
    </div >
  )
}


