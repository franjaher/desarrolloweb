import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"


function ItemListContainer({ encabezado }) {
    const { items, setItems } = useState([])

    const getItems = new Promise((resolve) => {
        setTimeout(() => {
            const productos = [
                {
                    id: 1,
                    nombre: "Kit Cilindro FZ16",
                    imagen: "/images/kitcilindro.jpg",
                    precio: "$350.000",
                    stock: 11,
                    inicial: 1,
                    detalles: "DETALLES",
                    categoria: 1
                },
                {
                    id: 2,
                    nombre: "Biela FZ16",
                    imagen: "/images/bielafz16.jpg",
                    precio: "$180.000",
                    stock: 11,
                    inicial: 1,
                    detalles: "DETALLES",
                    categoria: 1
                },
                {
                    id: 3,
                    nombre: "Kit Psiton",
                    imagen: "/images/kitpiston.png",
                    precio: "$260.000",
                    stock: 11,
                    inicial: 1,
                    detalles: "DETALLES",
                    categoria: 1
                },
                {
                    id: 4,
                    nombre: "Llantas Sahara",
                    imagen: "/images/llantasahara.png",
                    precio: "$410.000",
                    stock: 11,
                    inicial: 1,
                    detalles: "DETALLES",
                    categoria: 1
                },
                {
                    id: 5,
                    nombre: "Manzana Clutch CB125",
                    imagen: "/images/manzanaclutchcbf125.jpg",
                    precio: "$190.000",
                    stock: 11,
                    inicial: 1,
                    detalles: "DETALLES",
                    categoria: 2
                },
                {
                    id: 6,
                    nombre: "Kit de Arrastre",
                    imagen: "/images/kitdearrastre.jpg",
                    precio: "$310.000",
                    stock: 11,
                    inicial: 1,
                    detalles: "DETALLES",
                    categoria: 2
                },
                {
                    id: 7,
                    nombre: "Kit de Arrastre",
                    imagen: "/images/kitbombafreno.jpg",
                    precio: "$120.000",
                    stock: 11,
                    inicial: 1,
                    detalles: "DETALLES",
                    categoria: 2
                },
                {
                    id: 8,
                    nombre: "Kit Cilindro",
                    imagen: "/images/kitcilindro2.jpg",
                    precio: "$310.000",
                    stock: 11,
                    inicial: 1,
                    detalles: "DETALLES",
                    categoria: 2
                }
            ]

            resolve(productos)

        }, 2000)

    })

    useEffect(() => {
        getItems.then((data) => {
            setItems(data)
        })
    })

    return (
        <>
            <div>
                <div>
                    {encabezado}
                </div>
                <div>
                    <ItemList datos={items}></ItemList>
                </div>
            </div>
        </>
    )

}

export default ItemListContainer