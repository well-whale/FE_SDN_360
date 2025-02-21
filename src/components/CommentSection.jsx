import React, { useState } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"

const CommentSection = () => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")

  const addComment = () => {
    if (comment.trim()) {
      setComments([...comments, { text: comment, likes: 0, dislikes: 0 }])
      setComment("")
    }
  }

  const handleInputChange = (e) => {
    setComment(e.target.value)
  }

  const handleLike = (index) => {
    const updatedComments = [...comments]
    updatedComments[index].likes += 1
    setComments(updatedComments)
  }

  const handleDislike = (index) => {
    const updatedComments = [...comments]
    updatedComments[index].dislikes += 1
    setComments(updatedComments)
  }

  return (
    <div className="w-[1000px] bg-white my-10 p-[11px]">
      <h2 className="mb-[26px]">Comments</h2>

      <div className="flex gap-4 text-sm">
        <img className="border h-10 w-10 rounded-full bg-black" />

        <div className="flex flex-col flex-1">
          <textarea
            value={comment}
            onChange={handleInputChange}
            placeholder="Write a comment..."
            className="pt-2 w-full resize-none outline-none border-b-[1px]  focus:border-b-black focus:border-b-2"
          />
          <button
            className="my-4 self-end border p-[5px_11px] bg-[#FDC310] rounded-[5px] text-white"
            onClick={addComment}
          >
            Add Comment
          </button>
        </div>
      </div>

      <ul>
        {comments.length === 0 ? (
          <li>No comments yet.</li>
        ) : (
          comments.map((comment, index) => (
            <li key={index} className="flex gap-4">
              <img className="border h-10 w-10 rounded-full bg-black" />

              <div className="text-sm">
                <div>
                  <p className="font-medium">
                    Peter
                    <span className="font-normal text-xs text-gray-400">
                      2 years ago
                    </span>
                  </p>
                  {comment.text}
                </div>

                <div className="my-4 flex gap-4">
                  <div
                    className="flex gap-1 cursor-pointer"
                    onClick={() => handleLike(index)}
                  >
                    <ThumbsUp strokeWidth={1} size={20} />
                    {comment.likes}
                  </div>

                  <div
                    className="flex gap-1 cursor-pointer"
                    onClick={() => handleDislike(index)}
                  >
                    <ThumbsDown strokeWidth={1} size={20} />
                    {comment.dislikes}
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default CommentSection
