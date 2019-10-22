import React, { PureComponent } from 'react';
import { FilterForm, Icon } from './index'
/**
 * 测试启动页
 */
class test extends PureComponent {
    render() {
        return (
            <div>
                <FilterForm 
                    filterColumns={[{
                        component: <select></select>,
                        title: '123',
                        dataIndex: '123'
                    }]}
                />
                <Icon
                    iconCode="213" 
                    col
                />
            </div>
        );
    }
}

export default test;