import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {setName, getData} from '../redux/actions';
import {createStackNavigator} from '@react-navigation/stack'; //引入

const Stack = createStackNavigator();
import Markdown from 'react-native-markdown-renderer';
import {Tab, TabView} from 'react-native-elements';
let MainHeight = Dimensions.get('window').height;
let MainWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  codeBlock: {
    backgroundColor: 'gray',
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
  input: {
    width: MainWidth * 0.8,
    borderWidth: 2,
    height: 40,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: MainWidth * 0.1,
    marginRight: MainWidth * 0.1,
  },
  TabViewItem: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  optionArea: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  optionAreaLeft: {
    backgroundColor: 'white',
    height: 60,
    width: MainWidth * 0.82,
  },
  optionAreaRight: {
    backgroundColor: 'yellow',
    height: 60,
    width: 60,
  },
  optionBox: {
    height: 60,
    width: 95,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginStart: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#972F97',
    backgroundColor: 'rgba(151,47,151, 0.7)',
  },
  optionBoxUnActived: {
    height: 60,
    width: 95,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginStart: 2,
  },
  textDefault: {
    color: 'white',
    fontSize: 15,
  },
  textUnActived: {
    color: 'gray',
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
  const [index, setIndex] = React.useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData()); //进页面调action请求函数;
  }, []);
  useEffect(() => {
    dispatch(getData()); //进页面调action请求函数;
  }, [index]);

  const setRedux = () => {
    dispatch(setName('Redux新名字'));
  };

  const saveData = async () => {
    navigation.navigate('Screen_B');
  };
  const go = () => {
    navigation.navigate('Screen_G', {name: '李华', id: '18'});
  };

  //选项列表
  const [optionList, setOptionList] = useState([
    {id: 0, content: '关注'},
    {id: 1, content: '精选'},
    {id: 2, content: '热门'},
    {id: 3, content: '示例'},
    {id: 4, content: '理论'},
    {id: 5, content: '问题'},
  ]);
  //选项列表
  //获得选项;
  const [current, setCurrent] = useState(0);

  const [value, setValue] = useState('');
  const get = (optionId) => {
    console.log('id', optionId);
    setCurrent(optionId);
  };
  return (
    <View>
      <ScrollView horizontal={false}>
        <View style={styles.optionArea}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.optionAreaLeft}>
            {optionList.map((item) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => get(item.id)}>
                  <View
                    style={
                      item.id == current
                        ? styles.optionBox
                        : styles.optionBoxUnActived
                    }>
                    <Text
                      style={
                        item.id == current
                          ? styles.textDefault
                          : styles.textUnActived
                      }>
                      {item.content}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View style={styles.optionAreaRight}>
            <Text>图标</Text>
          </View>
        </View>
        {current == 0 ? <Text>关注</Text> : null}
        {current == 1 ? <Text>精选</Text> : null}
        {current == 2 ? <Text>热门</Text> : null}
        {current == 3 ? <Text>示例</Text> : null}
        {current == 4 ? <Text>理论</Text> : null}
        {current == 5 ? <Text>问题</Text> : null}
      </ScrollView>
    </View>
  );
};
export default ScreenA;
{
  /* <ScrollView>
                <TextInput
                  style={styles.input}
                  placeholder="输入姓名"
                  onChangeText={(value) => {
                    setValue(value);
                  }}
                  keyboardType="phone-pad" //指定键盘类型;
                  editable={true} //可编辑状态
                ></TextInput>
                <Text>tabA</Text>
                <Text>创作者:杨磊</Text>
                <Markdown style={styles} mergeStyle={true}>
                  {copy}
                </Markdown>
                <Button title="gotoG" onPress={() => go()}></Button>
                <Text h1>Recest</Text>
              </ScrollView> */
}
