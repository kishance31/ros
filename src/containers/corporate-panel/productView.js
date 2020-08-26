import React from 'react';

const ProductView = () => {
    const productData = [
        {
            'item_name': 'Keyboard',
            'title': 'Lorem ipsum dolor sit amet. Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium',
            'item_code': '1234',
            'item_price': '400',
            'item_description': 'Lorem ipsum dolor sit amet',
            'imgPath': 'chair1.png'
        },
        {
            'item_name': 'Keyboard',
            'title': 'Lorem ipsum dolor sit amet. Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium',
            'item_code': '1234',
            'item_price': '400',
            'item_description': 'Lorem ipsum dolor sit amet',
            'imgPath': 'chair2.png'
        },
        {
            'item_name': 'Keyboard',
            'title': 'Lorem ipsum dolor sit amet. Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium',
            'item_code': '1234',
            'item_price': '400',
            'item_description': 'Lorem ipsum dolor sit amet',
            'imgPath': 'table.png'
        }
    ]
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
                                    productData.map(product =>
                                        <tr>
                                            <td>{product.item_name}</td>
                                            <td>{product.item_code}</td>
                                            <td>${product.item_price}</td>
                                            <td className="text-center">
                                                <div className="product_img">
                                                    <img src={require(`../../assets/images/${product.imgPath}`)} alt={product.alternativeName} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="custom-tooltip" data-toggle="tooltip" data-placement="left" title='sadvcbfv dfvdfsv dfsv dfsv dfvdfvdfvdfv dfvdfvdf adfvdsfv sdfvdfsv sdfvdsfv adfvdsfv dfsvdsfv sdfvdfv'>{product.item_description}</div>
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