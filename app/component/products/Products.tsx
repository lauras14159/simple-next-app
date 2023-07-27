import type { Product } from "../../../lib/shopClient";

export function ProductsTable({ products = [] }: Record<'products', Product[]>) {
    return <table>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>category</th>
                <th>description</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product => (
                <tr key={`ProductsTable-${product.id}`}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                </tr>)
            )}
        </tbody>
    </table>
}