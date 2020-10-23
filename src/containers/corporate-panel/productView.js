import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { productListAsync, DisplayCategoryListAsync, ProductViewAction } from '../../actions/corporateProductView.action';
import BasicPagination from '../../components/pagination/basicPagination';
import { usePaginationHook } from '../../hooks/paginationHook';

const ProductView = () => {

    const dispatch = useDispatch();
    const [selectedLicense, setSelectedLicense] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const { productList, productCount, page, limit, categoryList, refreshList } =
        useSelector(state => state.corporateProductView, shallowEqual);
    const availableLicenseList =
        useSelector(state => state.purchaseLicense.availableLicenseList, shallowEqual);

    const onPageChange = (currentBatch) => {
        dispatch(ProductViewAction.refreshList(currentBatch || page));
    }

    const { handleBatchChange } =
        usePaginationHook(limit, page, onPageChange);

    useEffect(() => {
        if (refreshList) {
            dispatch(productListAsync(selectedCategory, selectedLicense))
        }
    }, [refreshList])

    useEffect(() => {
        dispatch(DisplayCategoryListAsync())
    }, [])

    const onLicenseChange = (e) => {
        setSelectedLicense(e.target.value)
        dispatch(ProductViewAction.refreshList(1));
    }

    const onCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
        dispatch(ProductViewAction.refreshList(1));
    }

    return (
        <>
            <div className="top_bar mb-0">
                <form className="flex-grow-1">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="input-group">
                                <label>License Type</label>
                                <select title="SELECT" className="selectpicker form-control"
                                    onChange={onLicenseChange}
                                >
                                    <option value="">All</option>
                                    {
                                        availableLicenseList.map(license => (
                                            <option key={license._id} value={license._id}>{license.type}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="input-group">
                                <label>Category</label>
                                <select title="SELECT" className="selectpicker form-control"
                                    onChange={onCategoryChange}
                                >
                                    <option value="">All</option>
                                    {
                                        categoryList.map(cat => (
                                            <option key={cat._id} value={cat._id} >{cat.category_name}</option>
                                        ))
                                    }
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
                                    <th className="w_20">PRODUCT&nbsp;NAME</th>
                                    <th className="w_20">ROS&nbsp;CODE</th>
                                    <th className="w_20">ROS&nbsp;COST&nbsp;(USD)</th>
                                    <th className="w_20">PRODUCT&nbsp;IMAGE</th>
                                    <th className="w_20">PRODUCT&nbsp;DESCRIPTON</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productList.map(product =>
                                        <tr key={product._id}>
                                            <td>{product.product_name}</td>
                                            <td>{product.ros_code}</td>
                                            <td>${product.ros_cost}</td>
                                            <td className="text-center">
                                                <div className="product_img">
                                                    <img src={product.product_image} alt={product.product_name} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="custom-tooltip" data-toggle="tooltip" data-placement="left" title={product.product_name}>{product.product_description}</div>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                        {
							productList.length ? (
								<div style={{ marginTop: 20, float: "right" }}>
									<BasicPagination
										totalRecords={productCount}
										limit={limit}
										batch={page}
										onBatchChange={handleBatchChange}
									/>
								</div>
							) : null
						}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductView;