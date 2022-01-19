import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {setName, getData} from '../redux/actions';
import {createStackNavigator} from '@react-navigation/stack'; //引入
const Stack = createStackNavigator();
import Markdown from 'react-native-markdown-renderer';
const styles = StyleSheet.create({
  codeBlock: {
    backgroundColor: '#822581',
    borderBottomWidth: 1,
    borderColor: 'red',
    fontSize: 13,
    color: 'white',
    paddingRight: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});
const copy = `
## 代码区域
\`\`\` js
import React from "react"
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class PictureCom extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [
        ],
        serverImgName:""
    };
    handleCancel = () => this.setState({ previewVisible: false });
    
    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined/>
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <>
                <Upload
                    action="http://127.0.0.1:8002/goods/fileUpload"
                    listType="picture-card"
                    name="imgSrc"
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
            </>
        );
    }
}
export default PictureCom
\`\`\`
## 表格
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
## 外链
[跳转到百度](http://www.baidu.com "title text!")
## 图片
![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
`;

const ScreenA = ({navigation}) => {
  const [name2, SetName2] = useState('');
  const {name, data} = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData()); //进页面调action请求函数;
  }, []);

  const setRedux = () => {
    dispatch(setName('Redux新名字'));
  };

  const saveData = async () => {
    navigation.navigate('Screen_B');
  };
  const go = () => {
    navigation.navigate('Screen_G', {name: '李华', id: '18'});
  };
  return (
    <View>
      <ScrollView horizontal={false}>
        <Text>tabA</Text>
        <Text>创作者:杨磊</Text>
        <Markdown style={styles} mergeStyle={true}>
          {copy}
        </Markdown>
        <Button title="gotoG" onPress={() => go()}></Button>
      </ScrollView>
    </View>
  );
};
export default ScreenA;
