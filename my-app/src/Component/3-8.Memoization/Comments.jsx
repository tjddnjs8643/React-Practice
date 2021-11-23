import React from 'react'
import CommentItem from './CommentItem'

export default function Comments({commentList}) {
    return (
        <div>
            {commentList.map((comment) => (
            <CommentItem
                key = {comment.title}
                title = {comment.title}
                likes = {comment.likes}
                content = {comment.content}
                    />
                )
                )} 
                
        </div>
    )
}
