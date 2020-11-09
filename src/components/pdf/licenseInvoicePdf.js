import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../assets/images/logo.svg';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  main: {
    // margin: 10,
    padding: "10px 15px 18px",
    border:"1px solid #000",
    flexGrow: 1
  }
});

// Create Document Component
const LicenseInvoicePdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.main}>
        <Image src="../../assets/images/logo.svg">
        </Image>
      </View>
    </Page>
  </Document>
);

export default LicenseInvoicePdf;