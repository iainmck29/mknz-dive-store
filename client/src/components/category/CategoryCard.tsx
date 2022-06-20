import React from "react";
import Card from "react-bootstrap/Card";
import { useAppDispatch } from "../../config/hooks";
import { changeCategory } from "../categories/categorySlice";
import style from "./CategoryCard.module.css"

export default function CategoryCard (props: any) {
    const dispatch = useAppDispatch()
    const handleChangeCategory = () => {
        dispatch(changeCategory(props.categoryTitle))
    }

    return (
        <Card className={style.card} tabIndex={0}>
            <div onClick={handleChangeCategory}>
            <Card.Img variant="top" src={props.imgSrc} />
        </div>
        </Card>
    )
}