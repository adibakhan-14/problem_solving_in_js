int main()
{
int A[100][100], i, j, rows, columns, product;
printf("Number of rows: ");
scanf("%d",&rows);
printf("Number of columns: ");
scanf("%d",&columns);
for(i=0;i<rows;i++)
{
for(j=0;j<columns;j++)
{
printf("A[%d][%d]: ",i, j);
scanf("%d",&A[i][j]);
}
}
printf("Multiplication with 3 gives:\n");

for(i=0;i<rows;i++)
{
for(j=0;j<columns;j++)
{
//printf("%10d ",A[i][j]);
product=3*A[i][j];
printf("%d ",product);
}printf("\n");
}
return 0;
}
