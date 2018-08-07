import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
`
const Column = ({
  md,
  mdOffset,
  xs,
  xsOffset,
  fullWidthOnMobile,
  children,
  ...props
}) => {
  const removeContainerPadding = fullWidthOnMobile
    ? `
      margin-left: -15px;
      margin-right: -15px;`
    : ''
  const Col = styled.div`
    ${removeContainerPadding}
    grid-column-start: ${1 + xsOffset};
    grid-column-end: ${1 + xsOffset + xs};
    @media (min-width: 992px) {
      grid-column-start: ${1 + mdOffset};
      grid-column-end: ${1 + mdOffset + md};
    }
  `
  return <Col {...props}>{children}</Col>
}

Column.defaultProps = {
  md: 12,
  mdOffset: 0,
  xs: 12,
  xsOffset: 0,
}

export { Column }

export const MiddleColumn = ({
  mdMarginInColumns,
  xsMarginInColumns,
  children,
  ...props
}) => {
  return (
    <Column
      md={12 - 2 * mdMarginInColumns}
      mdOffset={mdMarginInColumns}
      xs={12 - 2 * xsMarginInColumns}
      xsOffset={xsMarginInColumns}
      {...props}
    >
      {children}
    </Column>
  )
}
MiddleColumn.defaultProps = { mdMarginInColumns: 3, xsMarginInColumns: 0 }
