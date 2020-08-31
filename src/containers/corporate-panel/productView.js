import React from 'react';
import { ProductData } from '../../utils/constants';
const ProductView = () => {
    return (
        <>
            <div className="top_bar mb-0">
                <form className="flex-grow-1">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="input-group">
                                <label>License Type</label>
                                <select title="SELECT" className="selectpicker form-control">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="input-group">
                                <label>Category</label>
                                <select title="SELECT" className="selectpicker form-control">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="container-fluid">
                <div className="shadow_box">
                    <div className="general_table table-responsive">
                        <table>
                            <thead>

                                <tr>
                                    <th className="w_20">ITEM&nbsp;NAME</th>
                                    <th className="w_20">ITEM&nbsp;CODE</th>
                                    <th className="w_20">ITEM&nbsp;COST&nbsp;(USD)</th>
                                    <th className="w_20">ITEM&nbsp;IMAGE</th>
                                    <th className="w_20">ITEM&nbsp;DESCRIPTON</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ProductData.map(product =>
                                        <tr key={product.id}>
                                            <td>{product.itemName}</td>
                                            <td>{product.itemCode}</td>
                                            <td>${product.itemPrice}</td>
                                            <td className="text-center">
                                                <div className="product_img">
                                                    <img src={require(`../../assets/images/${product.imgPath}`)} alt={product.alternativeName} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="custom-tooltip" data-toggle="tooltip" data-placement="left" title={product.title}>{product.itemDescription}</div>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductView;