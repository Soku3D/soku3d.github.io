---
layout: post
date: 2023-01-16
title: Unreal Engine 에서 Tensorflow 사용하기
category: Graphic
---

## tensorflow 설치

언리얼 엔진에서 tensorflow를 사용하기 위해서는 우선 [tensorflow](https://www.tensorflow.org/?hl=ko)를 다운받아야 한다.

## 프로젝트 폴더에 tensorflow 넣기

다운 받은 tensorflow를 사용할 언리얼 엔진 프로젝트 폴더안에 ThirdParty 폴더를 만들고 그 안에 옮긴다.

## build.cs 파일에 라이브러리 경로 알려주기

(프로젝트 이름)/Source/(프로젝트 이름).Build.cs 파일은 모듈을 불러와 주기 때문에 이곳에 라이브러리와 헤더파일의 경로를 알려주어야 한다.

<script src="https://gist.github.com/Soku3D/b5bd80b4f5fff85085c13c36a73f9766.js"></script>

완료했으면 Binaries/Win64폴더에 dll 파일을 넣고 빌드를 하면 라이브러리를 사용할 수 있다.

단, 사용하기 위해서는 include의 경로를 잘 확인해 주어야 한다. 위의 경우에는 include 경로를 "../../ThirdParty/tensorflow/include" 로 설정했으므로 "c_api.h"를 include 하기 위해서는

```c++
#include "tensorflow/c/c_api.h"
```

와 같이 해주어야 하고 generated.h 보다 위에 include 해주어야 정상적으로 include 된다.