import styles from "./Comment.module.scss";

interface Props {
  description: string;
  date: Date;
}

const Comment = ({date, description}: Props) => {
  return (
    <div className={styles.root}>
      <h4 className={styles.date}>{new Date(date).toLocaleString()}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Comment;