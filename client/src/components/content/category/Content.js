import React, { useContext, useState } from 'react';
import Banner from '../Banner';
import { GlobalState } from '../../.././GlobalState';

import axios from 'axios';

function Content() {
    const state = useContext(GlobalState);
    const [token] = state.token;

    // Get list category from db
    const [categories, setCategories] = state.categoriesAPI.categories;
    const [category, setCategory] = useState('');
    const [products, setProducts] = state.productsAPI.products;
    const [search, setSearch] = useState();
    // Get status btn
    const [updateBtn, setUpdateBtn] = useState(false);
    // Get id to update
    const [idUpdate, setIdUpdate] = useState();
    // get value to update
    const [valueUpdate, setValueUpdate] = useState('');

    // Data table (search value)
    const DataTable = (searchVal) => {
        let arr = [];
        // Check search is undefined
        if (typeof search === 'undefined') {
            arr = categories;
        } else {
            // Filter value on table
            searchVal = searchVal.toLowerCase();

            // console.log(searchVal);
            categories.forEach(item => {
                let name = item.name.toLowerCase();
                if (name.search(searchVal) >= 0) {
                    arr.push(item);
                }
            })

        }
        return (
            arr.map((category, index) => (
                <tr>
                    <td className="t-data">{index + 1}</td>

                    {/* Highlight */}
                    {
                        (category._id === idUpdate) ?
                            (
                                <td className="t-data"><b style={{ color: 'red' }}>{category.name}</b></td>
                            ) : (
                                <td className="t-data">{category.name}</td>
                            )
                    }
                    <td className="t-data">{CountProduct(category.name)}</td>
                    <td className="t-data">
                        <button onClick={e => { setUpdateBtn(true); setIdUpdate(category._id) }}
                            className="btn-nomal">Change</button>
                    </td>
                    <td className="t-data">
                        <button onClick={e => { DeleteBtn(category._id) }}
                            className="btn-dangers">Delete</button>
                    </td>
                </tr>
            ))
        )
        // console.log(abc);
    }

    const DeleteBtn = async (id) => {
        if (window.confirm("Do you want to delete this category?")) {
            let src = '/api/category/' + id;
            await axios.delete(src, {
                headers: { Authorization: token }
            });
            alert("Delete category success");

            // Update categories
            let arr = categories;
            arr = arr.filter(item => {
                return item._id !== id;
            });
            setCategories(arr);
        }
    }

    // Change category name
    const ChangeBtn = async () => {
        if (window.confirm("Do you want to change category name?")) {
            let src = '/api/category/' + idUpdate;

            await axios.put(src, { name: valueUpdate }, {
                headers: { Authorization: token }
            });

            alert('Update category name success');

            // Update categories
            let arr = [];
            categories.forEach(cate => {
                if (cate._id === idUpdate) {
                    cate.name = valueUpdate;
                    arr.push(cate);
                } else {
                    arr.push(cate);
                }
            });
            setCategories(arr);
        }
    }

    const CountProduct = (category) => {
        let count = 0;
        products.forEach(product => {
            if (product.category === category) {
                count++;
            }
        })
        return count;
    }

    const CateSubmit = async (e) => {
        e.preventDefault();
        try {
            if (window.confirm("Do you want to add: '" + category + "' ?")) {
                await axios.post('/api/category', { name: category }, {
                    headers: { Authorization: token }
                });
                alert('Add new category success');
                window.location.href = "/category";
            }
        } catch (err) {
            alert(err.response.data.msg);
        }
    }
    return (
        <>
            <Banner link="/" name="Category" />
            <div className="check-out">
                <div className="container">
                    <div className="mock">
                        <div className="mock_row1">
                            <form onSubmit={CateSubmit}>
                                <div className="mock__input">
                                    <label htmlFor="field__input">Category name: </label>
                                    <input value={category} onChange={e => setCategory(e.target.value)} style={{ minWidth: '300px' }} id="field__input" type="text" required />
                                </div>
                                <button className="add-1">ADD</button>
                            </form>
                            {/* <a className=" add-1" href="single.html">Add</a> */}
                        </div>
                        <div className="mock_row2">
                            <div className="mock__input">
                                <label htmlFor="field__search">Search: </label>
                                <input onChange={e => setSearch(e.target.value)} style={{ minWidth: '200px' }} id="field__search" type="text" />
                            </div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th className="t-head">No</th>
                                        <th className="t-head">Category name</th>
                                        <th className="t-head">Products</th>
                                        <th className="t-head"></th>
                                        <th className="t-head"></th>
                                    </tr>
                                    {
                                        DataTable(search)
                                    }
                                </tbody>
                            </table>
                            {
                                (updateBtn === true) ?
                                    (
                                        <div className="mock__input">
                                            <label htmlFor="field__update">Update: </label>
                                            <input onChange={e => { setValueUpdate(e.target.value) }} style={{ minWidth: '200px' }} id="field__update" type="text" />
                                            <button
                                                onClick={e => {setUpdateBtn(false); setIdUpdate('')} }
                                                style={{ marginLeft: '25px', borderRadius: '50px', heigth: '30px', width: '30px' }}
                                                className="btn-dangers">X</button>
                                            <button
                                                onClick={e => { ChangeBtn() }}
                                                style={{ marginLeft: '10px', borderRadius: '50px', height: '30px', width: '30px' }}
                                                className="btn-success">✓</button>
                                        </div>
                                    ) :
                                    (
                                        <></>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;