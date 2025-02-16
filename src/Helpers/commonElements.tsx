export const commonButton = `
    border: none;
    margin: 5px;
    padding: 10px;
    border-radius: 3px;
    min-width: 50px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer; 
`;

export const commonSaveButton = `
    ${commonButton}
    margin: 0;
    margin-top: 5px;
    width: 100%;
    &:hover {
        background: linear-gradient(90deg, #a6bedb, #5c8abf);
    }
    box-sizing: border-box;
`;

export const yesButton = `
  ${commonButton}
  &:hover {
    background: linear-gradient(90deg, #f19b00, #f14b00);
  }
`;
export const noButton = `
  ${commonButton}
  &:hover {
    background: linear-gradient(90deg, #a6bedb, #5c8abf);
  }
`;

export const commonContainer = `
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 8px;
`;

export const commonInputWrapper = `
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: left;
`;

export const commonForm = `
  margin-top: 20px;
  width: 100%;
`;

export const commonUl = `
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  gap: 8px;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

export const commonLi = `
  list-style: none;
  background-color: #3e7cb1;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 11px 11px 20px -12px rgba(66, 68, 90, 1);
`;

export const commonInput = `
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  `;

export const commonSelect = `
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
`;
