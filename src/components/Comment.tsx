import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [LikeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment() {
       onDeleteComment(content)
    }

    function handleLikeComment() {
       setLikeCount((state) => {
        return state + 1 
       });
    }
    
    return (
        <div className={styles.comment}>
            <Avatar 
             hasBorder={false} 
             src="https://github.com/Jacomel.png" 
             alt="" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTine}>
                            <strong>Marlon Jacomel</strong>
                            <time title="02 de julho as 19:48h" dateTime="2024-07-02 19:48:38">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{LikeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}