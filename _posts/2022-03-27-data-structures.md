---
layout : single
title : 자료구조
date : 2022-03-27 18:00:00 +09:00
---
# 연속된 자료 구조와 연결된 자료 구조

## Contiguous data structures

> 연속된 자료 구조의 경우 모든 원소를 단일 메모리 청크에 저장하고, 각각의 메모리는 sizeof(type) 만큼 떨어져 있다. 따라서 임의의 원소(n만큼 떨어져 있는)에 대한 접근은 BA(Base Address)+n*sizeof(type) 을 통해 시간 복잡도 O(1)로 일정한 접근 시간으로 접근할 수 있다.  
> 또한 연속된 자료 구조의 경우 동적 배열과 정적 배열로 나뉜다.


## Linked data structures

> 연결된 자료 구조의 경우 메모리 청크에 데이터와 다음 메모리의 위치 포인터가 저장된다. 따라서 임의의 원소에 접근하기 위해서는 n번 이동하는 작업이 필요하기 때문에 시간 복잡도로 표현하면 O(n)이다.

## std::array
  std::array <datatype, size(data)> array1;

### 함수 

1. front() : 배열 첫 번째 원소 참조 반환
2. back() : 배열 마지막 원소 참조 반환
3. at() : [] 연산자와 다르게 index 값이 유효하지 않으면 exception 을 발생 시킨다.
---
## Binary tree


