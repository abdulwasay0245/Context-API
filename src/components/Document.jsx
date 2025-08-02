// components/MyDocument.tsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'justify',
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Hello PDF World</Text>
      <Text style={styles.bodyText}>
        This is a simple PDF file rendered using React PDF. It uses inline styles and supports basic layout and text formatting.
      </Text>
    </Page>
  </Document>
);

export default MyDocument;
