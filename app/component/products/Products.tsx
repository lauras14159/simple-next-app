import type { Product } from '../../../lib/shopClient';

export function ProductsTable({ products = [] }: Record<'products', Product[]>) {
  return (
    <table className="table-auto border-2 border-slate-300 ">
      <thead>
        <tr className="bg-gray-500 border-2 border-slate-300 text-white font-thin text-center  ">
          <th className="px-3">id</th>
          <th>title</th>
          <th>price</th>
          <th>category</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={`ProductsTable-${product.id}`}
            className=" even:bg-slate-300 odd:bg-white text-center"
          >
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
