import styles from "./Product.module.scss";

interface Props {
  imgUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
}

const Product = ({imgUrl, weight, size, name, count}: Props) => {
  return (
    <div className={styles.product}>
      <img className={styles.product__image} src={imgUrl} alt="product" />
      <div className={styles.product__content}>
        <div className={styles.product__name}>{name}</div>
        <div>Count: {count}</div>
        <div>
          Size: {size.width} x {size.height}
        </div>
        <div>Weight: {weight}</div>
      </div>
    </div>
  );
}

export default Product;
