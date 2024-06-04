<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> -->

<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Expense</title>
</head>
<body>
	<div class="container mt-3">
		<div class="col-5 bg-light p-4">
			<div class="d-flex justify-content-between align-items-baseline">
				<h1 class="text-success">Edit Expense</h1>
				<a href="/">Go Back</a>
			</div>
			<br>
			<form:form action="/updateTravel/${travel.id }" method="post"
				modelAttribute="travel">
				<input type="hidden" name="_method" value="put" />
				
				<form:label class="form-label" path="name">Expense Name</form:label>
				<form:input class="form-control" path="name" />
				<form:errors class="text-danger" path="name" />
				<br>
				<form:label class="form-label" path="vendor">Vendor</form:label>
				<form:input class="form-control" path="vendor" />
				<form:errors class="text-danger" path="vendor" />
				<br>
				<form:label class="form-label" path="price">Amount</form:label>
				<form:input type="number" class="form-control" path="price" />
				<form:errors class="text-danger" path="price" />
				<br>
				<form:label class="form-label" path="description">Description</form:label>
				<form:textarea class="form-control" path="description" />
				<form:errors class="text-danger" path="description" />
				<br>
				<input type="submit" value="Update" class="btn btn-primary mt-3" />
			</form:form>
		</div>
	</div>
</body>
</html>