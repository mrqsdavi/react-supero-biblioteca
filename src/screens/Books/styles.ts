import styled from 'styled-components';

export const TableTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const DatesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  .ant-typography {
    margin-right: 20px;
  }

  .ant-picker {
    width: 160px;
    margin-right: 20px;
  }
`;