//파일 경로와 웹팩 라이브러리 로딩
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js', //웹팩으로 빌드할 파일
  output: { //웹팩으로 빌드하고 난 결과물 파일의 위치와 이름
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  //파일들을 자바스크립로 변환해주는 로더 지정
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  //웹팩으로 빌드할 때 사용할 뷰 라이브러리 유형을 지정
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' //최신 웹팩 버전과 사용할 수 있는 풀 버전의 라이브러리
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  //웹팩 데브 서버 관련 속성을 지정
  devServer: {
    historyApiFallback: true, //클라이언트 사이드 라우팅인 뷰 라우터와 함께 사용
    noInfo: true,             //처음 서버를 시작할 때만 웹팩 빌드 정보를 보여주고, 이후 변경 시에는 빌드 정보를 보여주지 않는다
    overlay: true             //웹팩으로 빌드할 때 오류가 있으면 브라우저 화면 전체에 오류를 표시
  },
  //웹팩으로 빌드한 파일의 크기가 250kb를 넘으면 경고 메시지를 표시할지를 설정
  performance: {
    hints: false  //크기와 관계 없이 경고가 표시되지 않는다
  },
  devtool: '#eval-source-map' //웹팩으로 빌드된 파일로 웹 앱을 구동했을 때 개발자 도구에서 사용할 디버깅 방식을 지정
}
//배포 옵션
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
