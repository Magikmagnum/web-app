import React from 'react'
import "./Post.scss";

import { BiCommentDetail } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiImage } from "react-icons/bi";



export const PostMiniCard = ({ src, title, countImage, countLike, countComent }: { src?: string, title?: string, countImage?: number, countLike?: number, countComent?: number }) => {
    return (
        <div className="PostMiniCardBox">
            <img src={src} alt="implementation" />
            <h3>Coiffure afro</h3>
            <div className="PostMiniDash">
                <div className="PostMiniDashItem">
                    <div className="PostMiniCount">
                        2
                    </div>
                    <BiImage />
                </div>
                <div className="PostMiniDashItem">
                    <div className="PostMiniCount">
                        3
                    </div>
                    <BiHeart />
                </div>
                <div className="PostMiniDashItem">
                    <div className="PostMiniCount">
                        4
                    </div>
                    <BiCommentDetail />
                </div>
            </div>
        </div>
    )
}
